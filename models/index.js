const User = require("./userTable");
const Question = require("./questionsTable");
const Blog = require("./blogTable");

User.hasMany(Blog, {
    foreignKey: "userId"
});

User.hasMany(Question, {
    foreignKey: "userId"
});

Question.belongsTo(Blog, {
    foreignKey: "blogId"
});

Question.belongsTo(User, {
    foreignKey: "userId"
});

Blog.hasMany(Question, {
    foreignKey: "blogId"
});

module.exports = {User, Question, Blog};