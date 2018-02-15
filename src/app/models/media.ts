export class Media {
  constructor(
      public title: string,
      public media_type: string,
      public user_id: number,
      public file_id: number,
      public description?: string,
  ) {}
}
