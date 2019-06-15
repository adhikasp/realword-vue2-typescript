export interface ConduitBaseResponse {
  [key: string]: any;
}

export type Tag = string;

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}

export interface TagListResponse extends ConduitBaseResponse {
  tags: Tag[];
}

export interface ArticleResponse extends ConduitBaseResponse {
  article: Article;
}

export interface ArticleListResponse extends ConduitBaseResponse {
  articles: Article[];
}


export interface CommentListResponse extends ConduitBaseResponse {
  comments: Comment[];
}
