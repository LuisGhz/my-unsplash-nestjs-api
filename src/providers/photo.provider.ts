import { Connection } from 'mongoose';
import { PhotoSchema } from '../schema/photo.schema';

export const photoProvider = {
  provide: 'PHOTO_MODEL',
  useFactory: (connection: Connection) =>
    connection.model('Photo', PhotoSchema),
  inject: ['DATABASE_CONNECTION'],
};
