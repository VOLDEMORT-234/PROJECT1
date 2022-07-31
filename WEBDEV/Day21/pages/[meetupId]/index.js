// import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails(props) {
  return (
    // <Fragment>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://deepesh21100:Deepesh^123@cluster0.gz8qkso.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // const meetups = await meetupsCollection.find().toArray(); //by default finbd all document
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    //  [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  // console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://deepesh21100:Deepesh^123@cluster0.gz8qkso.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const SelectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // const meetups = await meetupsCollection.find().toArray(); //by default finbd all document
  client.close();

  return {
    props: {
      meetupData: {
        id: SelectedMeetup._id.toString(),
        title: SelectedMeetup._id.title,
        image: SelectedMeetup._id.image,
        address: SelectedMeetup._id.address,
        description: SelectedMeetup.description,
      },
      // make backend API
    },
  };
}

export default MeetupDetails;
// S;
