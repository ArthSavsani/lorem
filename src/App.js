import "./styles.css";
import { FiShoppingCart } from "react-icons/fi";
import { MdFormatAlignLeft } from "react-icons/md";
export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="icon">
          <MdFormatAlignLeft />
        </div>
        <div className="lorem">Lorem</div>
        <div className="cart">
          <FiShoppingCart />
        </div>
      </div>
      <div className="App">
        <div className="sidebar">
          <div className="title">Lorem Ipsum</div>
          <ul>
            <li className="active">About</li>
            <li>Service</li>
            <li>Cusins</li>
            <li>Gallary</li>
            <li>Contact</li>
            <li>Book</li>
          </ul>
          <button className="submit">Cart</button>
        </div>
        <div className="main_content">
          <div className="child1">
            <div className="heading">What are you having for Lunch?</div>
            <div className="description">
              <span>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
                <br /> sed do eiusmond tempor
                <br /> incididunt ut labore et.
              </span>
              <hr />
            </div>
          </div>
          <div className="child_bottom">
            <div class="row">
              <div class="column">
                <div class="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcp9o9sfeyDznIEkKibW6ZU0H6gsjXvaNYA&usqp=CAU"
                    alt="mexican tacos"
                  ></img>
                  <p>Mexican Tacos</p>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wQ3GL3UYZnGO9mYCFWqIsTAxGXOyq1-K5w&usqp=CAU"
                    alt="farmhouse pizza"
                  ></img>
                  <p>Farmhouse Pizza</p>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img
                    className="chicken"
                    src="data:image/jpeg;base64,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
                   "
                    alt="chicken burger"
                  ></img>
                  <p>Chicken Burger</p>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a7u7LtwdAwIKlPvwWySIPDh0B1iaxouQNw&usqp=CAU"
                    alt="loadednachos"
                  ></img>
                  <p>Loaded Nachos</p>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img
                    src="https://thebellyrulesthemind.net/wp-content/uploads/2020/12/hakka-noodles-1-720x720.jpg"
                    alt="hakkanoodles"
                  ></img>
                  <p>Hakka Noodles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description1">
        <span>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmond tempor <br />
          incididunt ut labore et.
        </span>
        <hr />
      </div>
    </>
  );
}
