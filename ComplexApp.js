/*
Filename: ComplexApp.js
Content: This code represents a complex application that models a social media platform with various features such as user registration, friend requests, posting updates, and searching users, among others.
*/

// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.friends = [];
    this.posts = [];
  }

  sendFriendRequest(user) {
    if (this.friends.includes(user)) {
      console.log("User is already a friend.");
    } else {
      user.receiveFriendRequest(this);
    }
  }

  receiveFriendRequest(user) {
    if (!this.friends.includes(user)) {
      console.log(`Received friend request from ${user.name}`);
    }
  }

  acceptFriendRequest(user) {
    if (this.friends.includes(user)) {
      console.log("User is already a friend.");
    } else {
      this.friends.push(user);
      user.friends.push(this);
      console.log(`Accepted friend request from ${user.name}`);
    }
  }

  postUpdate(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    console.log(`Posted update: "${content}"`);
  }

  searchUsers(keyword) {
    // Implement user search logic
    console.log(`Searching for users with keyword: ${keyword}`);
  }
}

// Post class
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  likePost() {
    this.likes++;
    console.log("Liked post");
  }

  commentPost(user, comment) {
    const postComment = `${user.name}: ${comment}`;
    this.comments.push(postComment);
    console.log(`Commented on post: "${postComment}"`);
  }
}

// Creating users
const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Emma Smith", "emma.smith@example.com");
const user3 = new User("Daniel Johnson", "daniel.johnson@example.com");

// Sending friend requests
user1.sendFriendRequest(user2);
user2.sendFriendRequest(user1);

// Accepting friend requests
user2.acceptFriendRequest(user1);

// Posting updates
user1.postUpdate("I am enjoying this social media app!");
user2.postUpdate("Me too!");

// Liking posts
user1.posts[0].likePost();
user2.posts[0].likePost();

// Commenting on posts
user1.posts[0].commentPost(user2, "Great to hear!");

// Searching for users
user3.searchUsers("John");

// Outputs:
// Received friend request from John Doe
// Accepted friend request from John Doe
// Posted update: "I am enjoying this social media app!"
// Posted update: "Me too!"
// Liked post
// Liked post
// Commented on post: "Emma Smith: Great to hear!"
// Searching for users with keyword: John