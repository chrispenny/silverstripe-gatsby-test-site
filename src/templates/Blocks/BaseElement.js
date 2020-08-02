import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const BaseElement = () => (
  null
);

BaseElement.defaultProps = {};

BaseElement.propTypes = {
  uuid: PropTypes.string,
  className: PropTypes.string,
  DNADesignBaseElement: PropTypes.shape({
    title: PropTypes.string,
    showTitle: PropTypes.number,
    sort: PropTypes.number,
  }),
};

export default BaseElement;

export const query = graphql`
fragment BaseElementFragment on SilverStripeDataObject {
  AppPage {
    ElementalArea {
      DNADesignElementalArea {
        Elements {
          uuid
          className
          DNADesignBaseElement {
            title
            showTitle
            sort
          }
        }
      }
    }
  }
}
`;
