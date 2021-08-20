export default class CommentService {
  static async getComments(page = 1) {
    const response = await fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`);

    return await response.json();
  }
}
