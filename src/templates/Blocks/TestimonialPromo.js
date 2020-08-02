import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

const TestimonialPromo = (props) => {
  const data = useStaticQuery(
    graphql`
      {
        allSilverStripeDataObject(filter: {className: {eq: "App__Testimonial__Testimonial"}}) {
          nodes {
            uuid
            AppTestimonial {
              title
              content
              Image {
                link
                SilverStripeFile {
                  title
                }
              }
            }
            className
          }
        }
      }
  `);

  const testimonials = data.allSilverStripeDataObject.nodes;
  const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];

  const testimonialTitle = testimonial.AppTestimonial.title;
  const testimonialContent = testimonial.AppTestimonial.content;

  const baseElement = props.DNADesignBaseElement;
  const testimonialPromo = props.AppTestimonialPromoBlock;

  const title = baseElement.title;
  const showTitle = baseElement.showTitle;

  return (
    <div>
      {showTitle
        ? <h2>{title}</h2>
        : null}

      <h3>{testimonialTitle}</h3>

      <div dangerouslySetInnerHTML={{__html: testimonialContent}}/>
    </div>
  )
};

export default TestimonialPromo;

TestimonialPromo.defaultProps = {};

TestimonialPromo.propTypes = {
  uuid: PropTypes.string,
  className: PropTypes.string,
  DNADesignBaseElement: PropTypes.shape({
    title: PropTypes.string,
    showTitle: PropTypes.number,
    sort: PropTypes.number,
  }),
  AppTestimonialPromoBlock: PropTypes.shape({
    promoContent: PropTypes.string,
    promoImageID: PropTypes.number,
    promoTitle: PropTypes.string,
  }),
};

export const query = graphql`
fragment TestimonialPromoFragment on SilverStripeDataObject {
  AppPage {
    ElementalArea {
      DNADesignElementalArea {
        Elements {
          AppTestimonialPromoBlock {
            promoContent
            promoImageID
            promoTitle
          }
        }
      }
    }
  }
}
`;
