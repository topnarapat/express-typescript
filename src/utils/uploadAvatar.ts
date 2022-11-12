import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const uploadAvatar = async (req: any, id: any) => {
  console.log(req.file);
  if (req.file) {
    await sharp(req.file.path)
      .resize(200, 200)
      .jpeg({ quality: 70 })
      .flatten({ background: "#FFF" })
      .toFile(path.join(__dirname, `../../dist/uploads/${id}.jpg`))
    await fs.promises.unlink(req.file.path);
  }
}

export default uploadAvatar;