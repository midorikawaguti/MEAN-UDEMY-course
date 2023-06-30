import {Post} from 'src/app/posts/posts.model';
import {Subject} from 'rxjs';

export class PostService{
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {title, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
