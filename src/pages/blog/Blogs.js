import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./Blogs.css";

// Import images
import post1Image from "../../assets/blogs/1styrs.jpg"; // replace with your actual image paths
import post2Image from "../../assets/blogs/2ndyrs.jpg";
import post3Image from "../../assets/blogs/macedonians.jpg";
import post4Image from "../../assets/blogs/bereans.jpg";
import Footer from "../../components/footer/Footer";

// Create an array of blog posts
const blogPosts = [
  {
    id: 1,
    image: post1Image,
    title: "The Generational Impacters",
    date: "April 05, 2024",
    author: "GIs ",
    content:
      "Ann asoGI's is an abreviation of generation impacters .We decided to be the change makers and so this name could describe what our aim is .many people may ask why We never based our name in the bible but in the real sense our change was to mainly the church but also the outside world .This change would be impacted in our generation through our way of life which may include through our .1 speech\n2.physical apearance\n3.our relations with others.nga is a berean",
  },
  {
    id: 2,
    image: post2Image,
    title: "The Pauls Generation",
    date: "November 18, 2023",
    author: "PGs",
    content:
      "It is a name that is used to refer to the second years of 2023/2024. The urge of us using the name \"Paul Generation\" was driven by the lifestyle and urge of Apostle Paul doing God's work, despite him having committed the worst sins ( 1st Timothy 1:12-13) in mens sight. God still used him mighty and through him many got to believe the gospel of Christ and acknowledge His supremacy. His lifestyle really motivated us that despite how much/to what extent we were in the world working and serving the devil, we believe that since we encountered Christ we can still be used by Him and for His glory. We are the Paul's of our generation strengthened by God to do His work in accordance to His will and for His glory (1st Timothy 1:12)",
  },
  {
    id: 3,
    image: post3Image,
    title: "MACEDONIANS",
    date: "March 19, 2024",
    author: "macedonians",
    content: `Inspiration :2nd Corinthians 8:1-5
      The name came as an inspiration from the believers in the churches of Macedonia who had first of all gave themselves to God and to the services by the will of God. They were zealous in propelling the ministry of Paul by joyfully giving out in accordance to their means even though they didn't have much.
      The Macedonians class has people who are full of love and care for one another and are zealous to work for the Lord just as the name suggests.
       #Where grace dwells`,
  },

  {
    id: 4,
    image: post4Image,
    title: "The Bereans",
    date: "march 20, 2024",
    author: "The Bereans",
    content: `The Bereans, inhabitants of the ancient Greek city of Berea, circa AD 50, as chronicled in Acts 17, are renowned for their independent pursuit of religious understanding, distinct from blindly accepting doctrines. To be a Berean meant embracing the Word of God eagerly and maintaining an open-mindedness to truth. Unlike the Thessalonians, who were hesitant towards the Gospel, the Bereans welcomed Paul and Silas's teachings, illustrating the importance of receptiveness to Christian teachings in contemporary life. They exhibited discernment by cross-referencing Paul's preaching with the Old Testament, emphasizing the critical role of personal scrutiny and objective analysis in spiritual education. The Bereans' commitment to daily Scripture study highlights the significance of regular engagement with divine teachings in navigating life's complexities. Their quest for truth underscores the necessity of authenticating information through biblical scrutiny, especially in a world rife with misinformation. By prioritizing biblical truth-seeking, individuals can shield themselves from deception, as espoused in the metaphorical imagery of God's armor. The title "The Bereans" resonates within the Tom Mboya University Christian Union, symbolizing a legacy of intellectual inquiry and spiritual dedication fostered by its members under the guidance of Sanwel Ng'ang'a, an esteemed figure within TMUCU.`,
  },
];

/// Create sections
const sections = [
  { id: "id1", posts: [blogPosts[0]] }, // Section 1 with Post 1 and Post 2
  { id: "id2", posts: [blogPosts[1]] }, // Section 1 with Post 1 and Post 2
  { id: "id3", posts: [blogPosts[2]] }, // Section 2 with Post 3
  { id: "id4", posts: [blogPosts[3]] }, // Section 3 with Post 4
];

/// Create the BlogPage component
const BlogPage = () => {
  return (
    <div>
      <Header />
      <section className="section-with-image">
        <div className="background-image"></div>
        <h1>Our Blogs</h1>
      </section>
      <Container>
        {sections.map((section, index) => (
          <div key={section.id} className="custom-section">
            {/* <h2>Section {index + 1}</h2> */}
            <Row>
              {section.posts.map((post) => (
                <Col key={post.id} md={12} lg={12} className="mb-4">
                  <div className="custom-post-container">
                    <div className="custom-image-container">
                      <img
                        className="img-fluid"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="custom-content-container">
                      <h3 className="custom-heading">{post.title}</h3>
                      <p className="text-muted">
                        {post.date} by {post.author}
                      </p>
                      <p className="custom-content">{post.content}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default BlogPage;
