import { DesktopLay } from "./Components/Views/Desktop";
import { Favorites } from "./Components/Views/Favorites/Favorite";
import { NavBarProvider } from "./Context/NavBarContext";
import { ClothingProvider } from "./Context/SliderContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Components/Views/Shop/Shop";

function App() {
  return (
    <div>
      <NavBarProvider>
        <ClothingProvider>
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<DesktopLay />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </HashRouter>
        </ClothingProvider>
      </NavBarProvider>
    </div>
  );
}

export default App;
