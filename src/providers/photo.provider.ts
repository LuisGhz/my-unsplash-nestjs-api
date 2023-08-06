import { Connection } from 'mongoose';
import { PhotoSchema } from '../schema/photo.schema';
import { dataBaseConts } from 'src/consts/database.conts';

export const photoProvider = {
  provide: dataBaseConts.PHOTO_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('Photo', PhotoSchema),
  inject: [dataBaseConts.DATABASE_CONNECTION],
};
