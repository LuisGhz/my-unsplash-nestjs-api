import { Schema } from 'mongoose';

export const PhotoSchema = new Schema({
  label: String,
  url: String,
});
