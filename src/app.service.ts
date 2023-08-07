import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Photo } from './models/photo.model';
import { PhotoDto } from './dto/PhotoDto';
import { dataBaseConts } from './consts/database.conts';

@Injectable()
export class AppService {
  constructor(
    @Inject(dataBaseConts.PHOTO_MODEL) private photoModel: Model<Photo>,
  ) {}

  async createPhoto(photo: PhotoDto): Promise<Photo> {
    const createPhoto = new this.photoModel(photo);
    return createPhoto.save();
  }

  async createManyPhotos(photo: PhotoDto[]): Promise<Photo[]> {
    return this.photoModel.insertMany(photo);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoModel.find().exec();
  }

  async findByLabel(label: string): Promise<Photo[]> {
    const regex = new RegExp(label);
    return this.photoModel
      .find({
        label: { $regex: regex, $options: 'i' },
      })
      .exec();
  }
}
