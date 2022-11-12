import { Request, Response } from 'express';
import axios from 'axios';

interface data {
  name: string;
  age: number;
}

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

export const getApi = async (req: Request, res: Response) => {
  // console.log('req.originalUrl :', req.originalUrl);
  // console.log('req.query :', req.query);

  // return res.send({
  //   message: 'API Version 1',
  //   data: req.query,
  // });

  try {
    const { data, status } = await axios.get<GetUsersResponse>('https://reqres.in/api/users', {
      headers: {
        Accept: 'application/json',
      },
    });
    // console.log(JSON.stringify(data, null, 4));
    // 👇️ "response status is: 200"
    console.log('response status is: ', status);
    return res.send({
      result: data,
    });
  } catch (error) {
    console.log(error);

    return res.send({
      error: error,
    });
  }

  // try {
  //   const { id, limit } = req.query;
  //   const { data, status } = await axios.get<any>('https://data.go.th', {
  //     headers: {
  //       Accept: 'application/json',
  //       //* ต้องครอบเป็น string ไว้เพราะ javascript ไม่สามารถตั้งชื่อตัวแปรที่มี - ได้
  //       'api-key': 'ต้องสมัครก่อนถึงจะได้',
  //     },
  //     params: {
  //       //* Static
  //       // resource_id: '',
  //       // limit: '5',
  //       //* Dynamic
  //       resource_id: id,
  //       limit: limit,
  //     },
  //   });
  //   return res.send({
  //     result: data,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.send({
  //     error: error,
  //   });
  // }
}

export const postApi = async (req: Request, res: Response) => {
  // console.log('req.originalUrl :', req.originalUrl);
  // console.log('req.body :', req.body);

  // return res.send({
  //   message: 'POST',
  //   data: req.body,
  // });

  try {
    const { id, limit } = req.body;
    const { data, status } = await axios.get<any>('https://data.go.th', {
      headers: {
        Accept: 'application/json',
        //* ต้องครอบเป็น string ไว้เพราะ javascript ไม่สามารถตั้งชื่อตัวแปรที่มี - ได้
        'api-key': 'ต้องสมัครก่อนถึงจะได้',
      },
      params: {
        //* Static
        // resource_id: '',
        // limit: '5',
        //* Dynamic
        resource_id: id,
        limit: limit,
      },
    });
    return res.send({
      result: data,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: error,
    });
  }
}

export class api {
  static getApi = (req: Request, res: Response) => {
    return res.send({
      message: 'Class API Version 1',
      data: req.query,
    });
  }
}