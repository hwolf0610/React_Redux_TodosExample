import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTema } from "../../actions/temasActions";
import { Link } from "react-router-dom";

class AddCurso extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeItem: {
        idItem: null,
        active: false
      }
    };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive(e) {
    this.setState({
      activeItem: {
        idItem: e.currentTarget.id,
        active: true
      }
    });
  }

  onDeleteClick(id) {
    this.props.deleteTema(id);
  }
  onEditClick(id) {
    this.props.deleteTema(id);
  }

  render() {
    let temas =
      (this.props && this.props.addcurso && this.props.addcurso) || [];

    const addcurso =
      (!!temas &&
        temas.length > 0 &&
        temas.map(exp => {
          let classnames = "";
          if (exp._id === this.state.activeItem.idItem) {
            classnames = "card card-body text-light bg-dark mb-3 container";
          } else {
            classnames = "card card-body text-darkd bg-light mb-3 container";
          }
          return (
            <tr
              id={exp._id}
              className={classnames}
              onClick={e => {
                this.handleActive(e);
                this.props.handleTemaItem(exp);
              }}
            >
              <tr className="mb-1">
                <b>Titulo:</b>
                {exp.title}
              </tr>
              <tr className="mb-1">
                <b>Resumen:</b>
                {exp.resume}
              </tr>
              <tr className="mb-1">
                <b>Temas relacionados:</b>
                {exp.topics.map(topic => {
                  return <>{topic + ", "}</>;
                })}
              </tr>

              <tr className="mb-1">
                <p>
                  <span className="btn badge badge-success badge-pill mr-1">
                    {exp.grade}
                  </span>
                </p>
              </tr>
              {this.props.auth.user.id === exp.user._id && (
                <tr className="d-flex justify-content-around">
                  <Link
                    to={`/crear-tema/${exp._id}`}
                    className="btn btn-info btn-sm col-md-5 center-block"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={this.onDeleteClick.bind(this, exp._id)}
                    className="btn btn-danger btn-sm col-md-5   center-block"
                  >
                    Borrar
                  </button>
                </tr>
              )}
            </tr>
          );
        })) ||
      null;
    return (
      <div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Elije un tema</th>
              </tr>
            </thead>
            <tbody>{addcurso}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

AddCurso.propTypes = {
  image: PropTypes.object.isRequired,

  deleteTema: PropTypes.func.isRequired
};

export default connect(null, { deleteTema })(AddCurso);
