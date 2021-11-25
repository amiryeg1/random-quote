import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nextQuote } from "../store/quotes_slice";
import twitterImg from "../twitter (1).png";
import quoteImg from "../quote.png";
import "./quote_box.css";

const QouteBox = (props) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.quotes.content);
  const author = useSelector((state) => state.quotes.author);

  const textBoxVariants = {
    hover: {
      scaleY: 1.2,
      textShadow: "0px 0px 8px rgb(000,000,000)",
      boxShadow: "0px 0px 8px rgb(000,000,000)",
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    changeBG: {
      background:
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      transition: {
        duration: 1,
      },
    },
  };

  const buttonVariants = {
    hidden1: {
      x: "-100vw",
    },
    hidden2: {
      x: "100vw",
    },
    animation1: {
      x: 0,

      transition: {
        duration: 2,
        type: "spring",
      },
    },
    animation2: {
      x: 0,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
    click: {
      scale: 250,
      transition: {
        duration: 0.1,
        type: "Inertia",
      },
    },
  };
  return (
    <div id="quote-box">
      <motion.div
        className="text-box"
        variants={textBoxVariants}
        animate="changeBG"
        whileHover="hover"
        drag
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 7 }}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <p id="text">{content}</p> <br />
        <span id="author">{author}</span> <br />
      </motion.div>
      <br />

      <br />
      <br />
      <br />
      <motion.button
        className="button new-quote"
        id="new-quote"
        onClick={() => dispatch(nextQuote())}
        variants={buttonVariants}
        initial="hidden2"
        animate="animation2"
        whileTap="click"
      >
        <img src={quoteImg} width="20vm" alt="quote-img" />
        &nbsp; new quote
      </motion.button>
      <br />
      <br />
      <div id="twitter">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${content}' %0A   ~${author}%0A`}
          rel="noreferrer"
          target="_blank"
        >
          <motion.button
            className="button twitter"
            variants={buttonVariants}
            initial="hidden1"
            animate="animation1"
            whileTap="click"
          >
            <img src={twitterImg} width="20vm" alt="twitter-img" />
            &nbsp; tweet quote
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default QouteBox;
