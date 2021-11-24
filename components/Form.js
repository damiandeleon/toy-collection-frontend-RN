import React, {useState} from 'react'
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";

function Form() {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        toyName: "",
        toyLine: "",
        faction: "",
        maxForAge: 0,
      },
    });
    const submitToy = (data) => console.log("Submitting Toy", data);


    return (
      <View>
        {/* toyname input */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Name of Toy Character'
            />
          )}
          name='toyName'
        />
        {errors.toyName && <Text>This is required.</Text>}

        {/* toyLine input */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Toy Line'
            />
          )}
          name='toyLine'
        />
        {errors.toyName && <Text>This is required.</Text>}

        {/* faction input */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Good or Evil'
            />
          )}
          name='faction'
        />
        {errors.toyName && <Text>This is required.</Text>}

        {/* maxAge input */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Minimum Age to Play'
            />
          )}
          name='maxForAge'
        />
        {errors.toyName && <Text>This is required.</Text>}

        {/* <TextInput
          style={styles.input}
          onChangeText={setText.toyName}
          value={text}
          placeholder='Name'
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={setText.toyLine}
          value={text}
          placeholder='Toy Line'
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={setText.faction}
          value={text}
          placeholder='Good or Evil'
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={setText.maxForAge}
          value={text}
          placeholder='Minimum Age'
        ></TextInput> */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#E6E6FA" : "#00FF00",
            },
            styles.button,
          ]}
          onPress={handleSubmit(submitToy)}
        >
          <Text style={{ color: "black", textAlign: "center" }}>Submit</Text>
        </Pressable>
      </View>
    );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default Form
