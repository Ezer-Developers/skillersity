"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import BlogAuthor from "./Blog-Sections/Blog-Author";
import ComntForm from "./Blog-Sections/ComntForm";
import Comment from "./Blog-Sections/Comment";

const BlogDetails = ({ matchedBlog, isSlider, isQuote, isAudio, isVideo }) => {
  const thumbsSwiperRef = useRef(null);

  return (
    <>
      <div className="content">
        {isQuote || isAudio || isVideo ? (
          ""
        ) : (
          <>
            {isSlider ? (
              <div className="post-thumbnail mb--30 position-relative wp-block-image blog-post-gallery-wrapper alignwide">
                <Swiper
                  className="swiper rbt-arrow-between blog-post-gallery-activation"
                  modules={[FreeMode, Navigation]}
                  ref={thumbsSwiperRef}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={false}
                  autoHeight={true}
                  navigation={{
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: true,
                  }}
                >
                  <div className="swiper-wrapper">
                    {matchedBlog &&
                      matchedBlog.imgPoster.map((item, innerIndex) => (
                        <SwiperSlide className="swiper-slide" key={innerIndex}>
                          <figure>
                            {item.galleryImg && (
                              <Image
                                src={item.galleryImg}
                                width={1085}
                                height={645}
                                priority
                                alt="Blog Images"
                              />
                            )}
                          </figure>
                        </SwiperSlide>
                      ))}
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-left">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-left"></i>
                      <i className="rbt-icon-top feather-arrow-left"></i>
                    </div>
                  </div>

                  <div className="rbt-swiper-arrow rbt-arrow-right">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-right"></i>
                      <i className="rbt-icon-top feather-arrow-right"></i>
                    </div>
                  </div>
                </Swiper>
              </div>
            ) : (
              <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                <figure>
                  {matchedBlog.imgPoster && (
                    <Image
                      src={matchedBlog.imgPoster[0].galleryImg}
                      width={1085}
                      height={645}
                      priority
                      alt="Blog Images"
                    />
                  )}
                  <figcaption>{matchedBlog.caption}</figcaption>
                </figure>
              </div>
            )}
          </>
        )}

        {isAudio ? (
          <audio className="mb--40" controls>
            <source
              src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/audio.mp3"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        ) : (
          ""
        )}

        {isVideo ? (
          <div className="ratio ratio-16x9 alignwide mb--30">
            <iframe
              className="square"
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}
        <p>{matchedBlog.subdesc}</p>
        <h4>{matchedBlog.titleOne}</h4>
        <p>{matchedBlog.descOne}</p>

        <blockquote
          className={`${isQuote
              ? "rbt-blockquote mt--0 alignwide square rbt-border-none bg-color-gray-light"
              : "wp-block-quote"
            }`}
        >
          <p>{matchedBlog.quote}</p>
          <cite>
            <Link href="#">
              {matchedBlog.city}
            </Link>
          </cite>
        </blockquote>
        {isQuote ? (
          ""
        ) : (
          <div className="wp-block-gallery columns-3 is-cropped">
            <ul className="blocks-gallery-grid">
              {matchedBlog &&
                matchedBlog.gallery.map((item, innerIndex) => (
                  <li className="blocks-gallery-item" key={innerIndex}>
                    <figure>
                      {item.galleryImg && (
                        <Image
                          className="radius-4"
                          src={item.galleryImg}
                          width={255}
                          height={143}
                          priority
                          alt="Blog Images"
                        />
                      )}
                    </figure>
                  </li>
                ))}
            </ul>
          </div>
        )}

        <p>
          <Link href="#">{matchedBlog.linkOne}</Link> {matchedBlog.descTwo}
        </p>

        <h4>{matchedBlog.titleTwo}</h4>
        <p>{matchedBlog.descTwo}</p>
        <p>{matchedBlog.toolsTwo}</p>

        <p>
          <Link href="#">{matchedBlog.linkTwo}</Link> {matchedBlog.descSaven}
        </p>
        <p>{matchedBlog.descEight}</p>

        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            {matchedBlog.addImgOne && (
              <Image
                src={matchedBlog.addImgOne}
                width={1085}
                height={645}
                priority
                alt="Blog Images"
              />
            )}

            <figcaption>{matchedBlog.caption}</figcaption>
          </figure>
        </div>
        <h4>{matchedBlog.titleThree}</h4>
        <p>{matchedBlog.descThree}</p>
        <p>{matchedBlog.toolsThree}</p>
        <h4>{matchedBlog.titleFour}</h4>
        <p>{matchedBlog.descFour}</p>
        <p>{matchedBlog.toolsFour}</p>

        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            {matchedBlog.addImgTwo && (
              <Image
                src={matchedBlog.addImgTwo}
                width={1085}
                height={645}
                priority
                alt="Blog Images"
              />
            )}

            <figcaption>{matchedBlog.caption}</figcaption>
          </figure>
        </div>
        <h4>{matchedBlog.titleFive}</h4>
        <p>{matchedBlog.descFive}</p>
        <p>{matchedBlog.toolsFive}</p>
        <p>{matchedBlog.tipFive}</p>

        <h4>{matchedBlog.titleSix}</h4>
        <p>
          {matchedBlog.descSix}
          <Link href="#">{matchedBlog.linkThree}</Link>.
        </p>
        <p>{matchedBlog.useSix}</p>
        <p>{matchedBlog.toolsSix}</p>
        <h4>{matchedBlog.titleSeven}</h4>
        <p>{matchedBlog.descSeven}</p>
        <p>{matchedBlog.toolsSeven}</p>

        {/* <p>
          <Link href="#">{matchedBlog.linkTwo}</Link> {matchedBlog.descFive}
        </p> */}

        <div className="wp-block-gallery columns-3 is-cropped">
          <ul className="blocks-gallery-grid">
            {matchedBlog &&
              matchedBlog.gallery.map((item, innerIndex) => (
                <li className="blocks-gallery-item" key={innerIndex}>
                  <figure>
                    {item.galleryImg && (
                      <Image
                        className="radius-4"
                        src={item.galleryImg}
                        width={255}
                        height={143}
                        priority
                        alt="Blog Images"
                      />
                    )}
                  </figure>
                </li>
              ))}
          </ul>
        </div>

        <h4>{matchedBlog.titleEight}</h4>
        <p>{matchedBlog.descEight}</p>
        <p>{matchedBlog.toolsEight}</p>

        <h4>{matchedBlog.titleNine}</h4>
        <p>{matchedBlog.descNine}</p>
        <p>{matchedBlog.toolsNine}</p>

        <h4>{matchedBlog.titleTen}</h4>
        <p>{matchedBlog.descTen}</p>
        <p>{matchedBlog.toolsTen}</p>

        <h4>{matchedBlog.titleEleven}</h4>
        <p>{matchedBlog.descEleven}</p>
        <p>{matchedBlog.toolsEleven}</p>

        <h4>{matchedBlog.titleTwelve}</h4>
        <p>{matchedBlog.descTwelve}</p>
        <p>{matchedBlog.toolsTwelve}</p>

        <h4>{matchedBlog.titleThisteen}</h4>
        <p>{matchedBlog.descThirteen}</p>
        <p>{matchedBlog.toolsThirteen}</p>

        <h4>{matchedBlog.titleFourteen}</h4>
        <p>{matchedBlog.descFourteen}</p>
        <p>{matchedBlog.tipFourteen}</p>

        <h4>{matchedBlog.titleConclusion}</h4>
        <p>{matchedBlog.descConclusion}</p>

        <div className="tagcloud">
          {matchedBlog &&
            matchedBlog.tags.map((tagItem, innerIndex) => (
              <Link href="#" key={innerIndex}>
                {tagItem}
              </Link>
            ))}
        </div>

        <div className="social-share-block">
          <div className="post-like">
            <Link href="#">
              <i className="feather feather-thumbs-up"></i>
              <span>2.2k Like</span>
            </Link>
          </div>
          <ul className="social-icon social-default transparent-with-border">
            {matchedBlog &&
              matchedBlog.social.map((socialItem, innerIndex) => (
                <li key={innerIndex}>
                  <Link href={socialItem.url}>
                    <i className={socialItem.icon}></i>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="about-author">
          {matchedBlog &&
            matchedBlog.author.map((author, innerIndex) => (
              <BlogAuthor {...author} author={author} key={innerIndex} />
            ))}
        </div>
        <div className="rbt-comment-area">
          <div className="rbt-total-comment-post">
            <div className="title">
              <h4 className="mb--0">30+ Comments</h4>
            </div>
            <div className="add-comment-button">
              <a
                className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                href="#"
              >
                <span className="btn-text">Add Your Comment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          <ComntForm />
        </div>

        <div className="rbt-comment-area">
          <h4 className="title">2 comments</h4>
          <ul className="comment-list">
            {matchedBlog &&
              matchedBlog.comment.map((comnt, innerIndex) => (
                <Comment {...comnt} comnt={comnt} key={innerIndex} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
