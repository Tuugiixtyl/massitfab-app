import { reactive } from "vue";

// Api

const store = reactive({
  isLoggedIn: false,
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  },
  // userData: {
  //   email: "",
  //   profilePic: "",
  //   balance: 0,
  //   joinDate: null,
  //   level: 0,
  // },
  // setUserData() {
  //   getProfile()
  //     .then((result) => {
  //       const { data } = result;

  //       this.userData.firstName = data.first_name;
  //       this.userData.lastName = data.last_name;
  //       this.userData.email = data.email;
  //       this.userData.profilePic = data.profile_picture;
  //       this.userData.role_id = data.role_id;
  //       this.userData.balance = data.balance;

  //       if (data.User_price_package.length > 0) {
  //         let pricePackage = data.User_price_package[0].Price_package;

  //         this.userData.package = pricePackage.title;
  //         this.userData.startDate = data.User_price_package[0].start_date;
  //         this.userData.endDate = data.User_price_package[0].end_date;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  isLoading: true,
  setIsLoading(value: boolean) {
    this.isLoading = value;
  },
});

export default store;
