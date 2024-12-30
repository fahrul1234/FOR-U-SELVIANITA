
new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "Images 1.jpg",
            img2: "images 2.jpg",
            img3: "Images 3.jpg",
            isOpen: false,
          },
          {
            img1: "images 4.jpg",
            img2: "images 5.jpg",
            img3: "images 6.jpg",
            isOpen: false,
          },
          {
            img1: "images 7.jpg",
            img2: "images 8.jpg",
            img3: "images 9.jpg",
            isOpen: false,
          },
          {
            img1: "images 10.jpg",
            img2: "images 11.jpg",
            img3: "images 12.jpg",
            isOpen: false,
          },
          {
            img1: "images 13.jpg",
            img2: "images 14.jpg",
            img3: "images 15.jpg",
            isOpen: false,
          },
          {
            img1: "images 16.jpg",
            img2: "images 17.jpg",
            img3: "images 18.jpg",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });
  