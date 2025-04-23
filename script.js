// 商品数据（图片、链接、价格）
const products = [
  {
    image: "product1.avif",
    link: "https://cyclemarket.jp/product/detail/999",
    price: "¥72,545 ～ ¥87,090 (税別)"
  },
  {
    image: "product2.avif",
    link: "https://cyclemarket.jp/product/detail/1365",
    price: "¥75,272 (税別)"
  },
  {
    image: "product3.avif",
    link: "https://cyclemarket.jp/product/detail/1269",
    price: "¥90,727 (税別)"
  },
  {
    image: "product4.avif",
    link: "https://cyclemarket.jp/product/detail/1108",
    price: "¥95,100 ～ ¥109,645 (税別)"
  },
  {
    image: "product5.avif",
    link: "https://cyclemarket.jp/product/detail/1028",
    price: "¥72,545 (税別)"
  },
  {
    image: "product6.avif",
    link: "https://cyclemarket.jp/product/detail/957",
    price: "¥90,727 (税別)"
  }
];

// 当前显示的产品索引
let currentIndex = 0;

// 获取 HTML 元素
const imgElement = document.getElementById("product-image");
const linkElement = document.getElementById("product-link");
const priceElement = document.getElementById("product-price");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 更新轮播显示内容
function updateProductDisplay() {
  const product = products[currentIndex];
  imgElement.src = product.image;
  linkElement.href = product.link;
  priceElement.textContent = product.price;
}

// 左右按钮事件
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  updateProductDisplay();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length;
  updateProductDisplay();
});

// 初始化显示
updateProductDisplay();
