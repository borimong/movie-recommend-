import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres} ) {
    return ( <div>
    <img src = {coverImg} alt = {title} />
    <h2 className="title">
        <Link to = {`/movie/${id}`} style={{ textDecoration: 'underline', color: 'yellow' }}>{title}</Link>
    </h2>
    <p className="summary">{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul className="genre">
        {genres.map((g) => (<li key = {g}>{g}</li>))}
    </ul>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;