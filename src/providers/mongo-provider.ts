import * as mongoose from 'mongoose';

export const mongoProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.8uvasjq.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    ),
};
