import { getProfile } from "@/api/user";
import { reactive } from "vue";

// Api

const store = reactive({
  isLoggedIn: false,
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  },
  userData: {
    username: "",
    email: "",
    summary: "",
    profilePic: "",
    balance: 0,
    joinDate: null,
    // level: 0,
  },
  setUserData(key: string) {
    getProfile(key)
      .then((result) => {
        const { data } = result.data;

        this.userData.username = data.username;
        this.userData.email = data.email;
        this.userData.summary = data.summary;
        this.userData.profilePic = data.profile_picture;
        this.userData.balance = data.balance;
        this.userData.joinDate = data.created_at;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  wishlist: [],
  setWishlist(value: never[]) {
    this.wishlist = value;
  },
  cartlist: {
    in_cart: [],
    cartSubtotal: 0,
    TotalInCart: 0,
  },
  setCartList(value: { in_cart: never[]; total_price: number; total_in_cart: number; }) {
    this.cartlist.in_cart = value.in_cart;
    this.cartlist.cartSubtotal = value.total_price;
    this.cartlist.TotalInCart = value.total_in_cart;    
  },
  isLoading: true,
  setIsLoading(value: boolean) {
    this.isLoading = value;
  },
});

export default store;
