function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband gets butter");
        resolve("Butter");
      }, 2000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband gets cold drinks");
        resolve("Cold drinks");
      }, 1000);
    });
  }
  
  async function makePurchase() {
    try {
      const butter = await getButter();
      const coldDrinks = await getColdDrinks();
  
      console.log(`Husband buys ${butter} and ${coldDrinks}`);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  // Using Promise.all with async/await
  async function makePurchaseWithPromiseAll() {
    try {
      const [butter, coldDrinks] = await Promise.all([getButter(), getColdDrinks()]);
  
      console.log(`Husband buys ${butter} and ${coldDrinks}`);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  // Converting createPost to async/await
  async function createPost(postData) {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error("Error creating post");
      }
  
      const data = await response.json();
      console.log("Created post:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  // Converting deletePost to async/await
  async function deletePost(postId) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE"
      });
  
      if (!response.ok) {
        throw new Error("Error deleting post");
      }
  
      console.log("Post deleted successfully");
    } catch (error) {
      console.log("Error:", error);
    }
  }
  