// src/types/post.ts
import { SvgIconComponent } from '@mui/icons-material';
import { IUser } from './user';

export interface IPost {
  id: number;
  title: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string | null;
  category: string;
  author: IUser;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  isPublished :boolean;
}

export interface CategoryProps{
  category: number,
  categor_label: string,
  icon: SvgIconComponent
}