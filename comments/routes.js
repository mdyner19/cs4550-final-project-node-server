import * as dao from "./dao.js";
function CommentRoutes(app) {
    const createComment = async (req, res) => {
        const comment = await dao.createComment(req.body);
        res.json(comment);
    };
    const deleteComment = async (req, res) => {
        const status = await dao.deleteComment(req.params.commentId);
        res.json(status);
    };
    const findAllComments = async (req, res) => {
        const comments = await dao.findAllComments();
        res.json(comments);
    };
    const updateComment = async (req, res) => {
        const { commentId } = req.params;
        const status = await dao.updateComment(commentId, req.body);
        res.json(status);
    };
    const findCommentForEvent = async (req, res) => {
        const { eid } = req.params;
        let comments = await dao.findAllComments();
        comments = comments.filter((c) => parseInt(c.eventId) === parseInt(eid));
        res.send(comments);
    }
    app.post("/api/events/:eid/comments", createComment);
    app.put("/api/events/:commentId", updateComment);
    app.delete("/api/events/:commentId", deleteComment);
    app.get("/api/events/:eid/comments", findCommentForEvent);
}
export default CommentRoutes;