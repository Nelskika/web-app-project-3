type RandomUser = {
  results: Array<User>;
};

// Define the type User to match the JSON structure from https://randomuser.me/api
type User = {
  name: {
    first: string;
    last: string;
  };
  location: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};



// Define the type User to match the JSON structure from https://randomuser.me/api
type activity = {
 activity: string,
 accessibility : number,
 type: string,
 participants: number,
 price: number,
 key: number
};

export { User, RandomUser,activity };
