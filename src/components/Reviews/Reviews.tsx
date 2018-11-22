import * as React from 'react';

class Reviews extends React.Component<any, any> {
  public render() {
    return (
      <div className="reviews">
        <h3>řekli o nás</h3>
        <div className="container-center">
          <div className="grid-container">
            <div className="review-el">
              <img className="review-img" src="assets/images/photo-1.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
            <div className="review-el">
              <img className="review-img" src="assets/images/photo-2.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
            <div className="review-el">
              <img className="review-img" src="assets/images/photo-3.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                  <img src="assets/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
