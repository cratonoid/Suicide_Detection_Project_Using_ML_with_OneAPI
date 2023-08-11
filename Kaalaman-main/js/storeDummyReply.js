 const storeDummReply = () => {
    let replyList = localStorage.getItem("replyList");

    if (replyList == null) {
      let replyList = [];
  
      let dummyReply = {
        replyId: "reply1",
        replyToId: "post1",
        replyToBatchClass: "post1Batch",
        replyToText: "Any idea what is the best android smartphone I can get? I want the best camera system and the best screen. Software  experience is important for me as well. Thanks in advance!",
        replyText: "Hi! I've been using the Samsung S22 ultra for my daily driver for the past 5 months. I can only say that it's the best smartphone I've had. It has everything you've asked for. Great battery life as well.",
        userName: "Dummy Replier 1",
      };
  
      localStorage.setItem("reply", JSON.stringify(dummyReply));
      localStorage.setItem("replyId", 1);
      replyList.push(dummyReply);
      localStorage.setItem("replyList", JSON.stringify(replyList));
  
      let dummyReply2 = {
        replyId: "reply2",
        replyToId: "reply1",
        replyToBatchClass: "post1Batch",
        replyToText: "Hi! I've been using the Samsung S22 ultra for my daily driver for the past 5 months. I can only say that it's the best smartphone I've had. It has everything you've asked for. Great battery life as well.",
        replyText: "I will definitely checkout that device. Thank you!",
        userName: "Dummy Poster 1",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply2));
      localStorage.setItem("replyId", 2);
      replyList.push(dummyReply2);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply3 = {
        replyId: "reply3",
        replyToId: "post2",
        replyToBatchClass: "post2Batch",
        replyToText: "Hi, I am an aspiring entrepreneur and I wanted to source products overseas. I'm a bit skeptical with some of the websites I've found. I'm hoping someone can help me.",
        replyText: "Hello there! I've been sourcing products with this 2 websites. Alibaba and Aliexpress. Make sure to find a verified supplier before ordering a product. Goodluck!",
        userName: "Dummy Replier 2",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply3));
      localStorage.setItem("replyId", 3);
      replyList.push(dummyReply3);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply4 = {
        replyId: "reply4",
        replyToId: "reply3",
        replyToBatchClass: "post2Batch",
        replyToText: "Hello there! I've been sourcing products with this 2 websites. Alibaba and Aliexpress. Make sure to find a verified supplier before ordering a product. Goodluck!",
        replyText: "Omg! Thank you for this info. I've been addicted to this website and found a a lot of product ideas I can sell. Again, thank you so much for this.",
        userName: "Dummy Poster 2",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 4);
      replyList.push(dummyReply4);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply5 = {
        replyId: "reply5",
        replyToId: "post3",
        replyToBatchClass: "post3Batch",
        replyToText: "I'm new to this city and I wanted to enroll in a 24hr gym. Any recommendations guys? Thanks!",
        replyText: "Anytime fitness is the perfect gym for you. Great equipments with great ambiance and reasonable monthly fees.",
        userName: "Dummy Replier 3",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 5);
      replyList.push(dummyReply5);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply6 = {
        replyId: "reply6",
        replyToId: "reply5",
        replyToBatchClass: "post3Batch",
        replyToText: "Anytime fitness is the perfect gym for you. Great equipments with great ambiance and reasonable monthly fees.",
        replyText: "Thanks a lot bro!",
        userName: "Dummy Poster 3",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 6);
      replyList.push(dummyReply6);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply7 = {
        replyId: "reply7",
        replyToId: "post4",
        replyToBatchClass: "post4Batch",
        replyToText: `I'm a "tito" and been playing Counter Strike for the longest time. Any FPS games you can recommend that's modernize?`,
        replyText: "Hello Tito! Try Valorant po! I'm sure you'll enjoy it.",
        userName: "Dummy Replier 4",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 7);
      replyList.push(dummyReply7);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply8 = {
        replyId: "reply8",
        replyToId: "reply7",
        replyToBatchClass: "post4Batch",
        replyToText: "Hello Tito! Try Valorant po! I'm sure you'll enjoy it.",
        replyText: "Been playing 2 weeks straight and now I'm a Radiant! Yeah!!! Rock and Roll to the world!",
        userName: "Dummy Poster 4",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 8);
      replyList.push(dummyReply8);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply9 = {
        replyId: "reply9",
        replyToId: "post5",
        replyToBatchClass: "post5Batch",
        replyToText: "My wife and I been debating which fast food chain offers the best tasting chicken. I say KFC and she says Jolibee. What do you think guys? haha!",
        replyText: "Mang Inasal for life!",
        userName: "Dummy Replier 5",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 9);
      replyList.push(dummyReply9);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply10 = {
        replyId: "reply10",
        replyToId: "reply9",
        replyToBatchClass: "post5Batch",
        replyToText: "Mang Inasal for life!",
        replyText: "Cant argue with that. LOL",
        userName: "Dummy Poster 5",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 10);
      replyList.push(dummyReply10);
      localStorage.setItem("replyList", JSON.stringify(replyList));
    }
 }

 export default storeDummReply