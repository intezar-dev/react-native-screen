import { StyleSheet, Text, View } from "react-native";

// Screen One
// import Home from "./src/screenone/Home";
// import Footer from "./src/resuable/Footer";

// Screen Tow
// import Home_2 from "./src/screentwo/Home_2";
// import Footer from "./src/resuable/Footer";

// Screen Three
// import Home_3 from "./src/screenthree/Home_3";
// import Footer from "./src/resuable/Footer";

// Screen Four
import Home_4 from "./src/screenfour/Home_4";
import Footer from "./src/resuable/Footer";

export default function App() {
  return (
    <View>
      {/* 1. Screen One */}
      {/* Note Uncomment Screen One */}
      {/* <Home /> */}
      {/* <Footer /> */}

      {/* 2. Screen Two */}
      {/* Then comment Screen One */}
      {/* And Uncomment Screen Two */}
      {/* <Home_2 /> */}
      {/* <Footer /> */}

      {/* 3. Screen Three */}
      {/* Then comment Screen Two */}
      {/* And Uncomment Screen Three */}
      {/* <Home_3 /> */}
      {/* <Footer /> */}

      {/* 4. Screen Four */}
      {/* Then comment Screen Three */}
      {/* And Uncomment Screen Four */}
      <Home_4 />
      <Footer />
    </View>
  );
}
