import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
    // Top reviews from business profile
    const topReviews = [
        {
            name: 'Rajesh Kumar',
            rating: 5,
            date: 'December 2024',
            review: 'Excellent service! The bike was in perfect condition and the staff was very helpful. Highly recommend for anyone looking to rent bikes in Chittoor.',
            avatar: 'RK'
        },
        {
            name: 'Priya Sharma',
            rating: 5,
            date: 'November 2024',
            review: 'Great experience! Doorstep delivery was very convenient. The bike was clean and well-maintained. Will definitely rent again!',
            avatar: 'PS'
        }
    ];

    return (
        <section id="reviews" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Customer Reviews
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Customers
                        <span className="gradient-text"> Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Read reviews from our satisfied customers.
                    </p>
                </div>

                {/* Top Reviews Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {topReviews.map((review, index) => (
                        <div
                            key={index}
                            className="card hover-lift animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="p-8">
                                <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={`text-xl ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    "{review.review}"
                                </p>

                                {/* Reviewer Info */}
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
