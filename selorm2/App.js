import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

// Import local images
import exerciseImage from './assets/exercise.jpg';
import studyImage from './assets/study.jpg';
import workImage from './assets/work.jpg';
import healthImage from './assets/health.jpg';
import fitnessImage from './assets/fitness.jpg';
import lifestyleImage from './assets/lifestyle.jpg';
import readingImage from './assets/reading.jpg';
import musicImage from './assets/music.jpg';

export default function Task() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Mobile App Development" },
    { id: "2", title: "Web Development" },
    { id: "3", title: "Push Ups" },
    { id: "4", title: "Database Optimization" },
    { id: "5", title: "Graphic Design" },
    { id: "6", title: "Content Writing" },
    { id: "7", title: "Marketing Strategy" },
    { id: "8", title: "Yoga" },
    { id: "9", title: "Meditation" },
    { id: "10", title: "Data Analysis" },
    { id: "11", title: "Project Planning" },
    { id: "12", title: "Client Meeting" },
    { id: "13", title: "Research" },
    { id: "14", title: "Code Review" },
    { id: "15", title: "Testing" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.Task}>
      <View style={styles.Group1050}>
        <View style={styles.Frame1}>
          <View style={styles.Group1}>
            <Text style={styles.HelloDevs}>Hello, Devs</Text>
            <Text style={styles._14TasksToday}>14 tasks today</Text>
          </View>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/cr6x7thawnb-1%3A13?alt=media&token=44fddbbd-1c22-4e03-a400-324a9463d3da",
            }}
          />
        </View>
        <View style={styles.Search3}>
          <View style={styles.SearchBox}>
            <TextInput style={styles.SearchInput} placeholder="Search" />
          </View>
          <Image
            style={styles.Filter}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/cr6x7thawnb-1%3A31?alt=media&token=3c69cd07-147f-44bb-b8f8-77bfb17eaadb",
            }}
          />
        </View>
        <Text style={styles.Categories}>Categories</Text>
        <View style={styles.Group9}>
          <View style={styles.CategoriesCard}>
            <View style={styles.Group7}>
              <Text style={styles.Exercise}>Exercise</Text>
              <Text style={styles._12Tasks}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={exerciseImage}
            />
          </View>
          <View style={styles.CategoriesCard1}>
            <View style={styles.Group71}>
              <Text style={styles.Study}>Study</Text>
              <Text style={styles._12Tasks1}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={studyImage}
            />
          </View>
        </View>
        <View style={styles.Group9}>
          <View style={styles.CategoriesCard}>
            <View style={styles.Group7}>
              <Text style={styles.Work}>Work</Text>
              <Text style={styles._12Tasks}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={workImage}
            />
          </View>
          <View style={styles.CategoriesCard1}>
            <View style={styles.Group71}>
              <Text style={styles.Health}>Health</Text>
              <Text style={styles._12Tasks1}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={healthImage}
            />
          </View>
        </View>
        <View style={styles.Group9}>
          <View style={styles.CategoriesCard}>
            <View style={styles.Group7}>
              <Text style={styles.Fitness}>Fitness</Text>
              <Text style={styles._12Tasks}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={fitnessImage}
            />
          </View>
          <View style={styles.CategoriesCard1}>
            <View style={styles.Group71}>
              <Text style={styles.Lifestyle}>Lifestyle</Text>
              <Text style={styles._12Tasks1}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={lifestyleImage}
            />
          </View>
        </View>
        <View style={styles.Group9}>
          <View style={styles.CategoriesCard}>
            <View style={styles.Group7}>
              <Text style={styles.Reading}>Reading</Text>
              <Text style={styles._12Tasks}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={readingImage}
            />
          </View>
          <View style={styles.CategoriesCard1}>
            <View style={styles.Group71}>
              <Text style={styles.Music}>Music</Text>
              <Text style={styles._12Tasks1}>12 Tasks</Text>
            </View>
            <Image
              style={styles.CategoryImage}
              source={musicImage}
            />
          </View>
        </View>
        <Text style={styles.OngoingTask}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
        />
        <TextInput style={styles.TextInput} placeholder="Add a new task" />
        <Button title="Add Task" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Task: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Group9: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  CategoriesCard: {
    flex: 1,
    marginRight: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Group7: {
    marginBottom: 10,
  },
  Exercise: {
    fontSize: 16,
    fontWeight: "700",
  },
  Work: {
    fontSize: 16,
    fontWeight: "700",
  },
  Health: {
    fontSize: 16,
    fontWeight: "700",
  },
  Fitness: {
    fontSize: 16,
    fontWeight: "700",
  },
  Lifestyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  Reading: {
    fontSize: 16,
    fontWeight: "700",
  },
  Music: {
    fontSize: 16,
    fontWeight: "700",
  },
  _12Tasks: {
    fontSize: 12,
    fontWeight: "400",
  },
  CategoryImage: {
    width: "100%",
    height: 132,
    borderRadius: 10,
  },
  CategoriesCard1: {
    flex: 1,
    marginLeft: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Group71: {
    marginBottom: 10,
  },
  Study: {
    fontSize: 16,
    fontWeight: "700",
  },
  _12Tasks1: {
    fontSize: 12,
    fontWeight: "400",
  },
  Group1050: {
    width: "100%",
  },
  Frame1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  Group1: {
    flexDirection: "column",
  },
  HelloDevs: {
    fontSize: 32,
    fontWeight: "700",
  },
  _14TasksToday: {
    fontSize: 12,
    fontWeight: "500",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  SearchBox: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(251,249,247,1)",
    borderRadius: 14,
    backgroundColor: "rgba(251,249,247,1)",
  },
  SearchInput: {
    padding: 10,
    fontSize: 16,
  },
  Filter: {
    width: 24,
    height: 24,
  },
  Categories: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  OngoingTask: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  flatList: {
    marginBottom: 20,
  },
  taskCard: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  TextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 14,
    backgroundColor: "rgba(251,249,247,1)",
    marginBottom: 10,
  },
});