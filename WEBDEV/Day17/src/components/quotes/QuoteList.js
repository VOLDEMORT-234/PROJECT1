import { Fragment } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const History = useHistory();
  // const [checkorder, setIsorder] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); //default javascript
  const isSortingAsending = queryParams.get("sort") === "asc";
  // console.log(location);
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsending);
  const changeSortinghandler = () => {
    History.push({
      pathname: location.pathname,
      search: `?sort= ${isSortingAsending ? "desc" : "asc"}`,
    });
    
    // History.push(
    //   `${location.pathname}?sort= ${isSortingAsending ? "desc" : "asc"}`
    // );
    //very important
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortinghandler}>
          Sort {isSortingAsending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
