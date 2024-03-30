(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Product: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Saving in the data base", product);
    }
  }

  class Mailer {
    private masterEmail: string = "fernando@google.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Sending an email to clients", template);
    }
  }

  // Normally, this is a class for control the view that is deploy to user
  // Remain that we can take many views that they do this same work
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["eduardo@google.com"], "to-clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log("Adding to car ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
