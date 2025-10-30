function copyLink() {
      const link = "http://127.0.0.1:5501/HomePage.html"
      navigator.clipboard.writeText(link)
        .then(() => {
          alert("Link copied correctly");
        })
        .catch(err => {
          console.error("Error during coping link", err);
        });
    }