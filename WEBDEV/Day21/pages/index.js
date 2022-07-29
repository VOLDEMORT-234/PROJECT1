// import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first tumps",
//     image:
//       "",
//     address: "Some addres 5,NYC",
//     description: "This is first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second tumps",
//     image:
//       "https://th.bing.com/th/id/R.e35ee12fbd7ad0533f485e1d03274dd5?rik=LB3gAJUchVHYsw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffFXBCPi.jpg&ehk=iiGoQMd7vTFbSQ8SZLryJiuPsNNkJd%2fVviSkrGotX0I%3d&risl=&pid=ImgRaw&r=0",
//     address: "Some addres 10,NYC",
//     description: "This is second meetup",
//   },
// ];
// Two forms of pre-rendering=static generation and server side rendering very important

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send http request
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return (
    // <Layout>
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a hugelist higly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>

    // {/* </Layout> */}
  );
}

// getServersideprops  is better than getStaticProps is better depends on  situation
// hey baby hey baby hai;

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // revalidate not make any sence here
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  // MongoClient.connect('')

  const client = await MongoClient.connect(
    "mongodb+srv://deepesh21100:Deepesh^123@cluster0.gz8qkso.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); //by default finbd all document
  client.close();
  // fetch("/api/meetups");

  return {
    props: {
      meetups: JSON.parse(
        JSON.stringify(
          meetups.map((meetup) => ({
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString(),
          }))
        )
      ),
    },
    revalidate: 1, //number of secound next.js wait
    // regular update
  };
}
//preserve name very important
export default HomePage;
