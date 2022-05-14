import { Router } from 'express';

export interface Controller {
  path: string;
  router: Router;
}

export type Token = {
  id: string;
};
