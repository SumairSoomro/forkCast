import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navItems = [
    { label: "Homepage", path: "/homepage" },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setError("No token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:4000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { user } = res.data;
        const username = user.user_metadata?.username;
        const email = user.email;

        setUser({ username, email });
        console.log("User data:", { username, email });
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand="Forkcast" items={navItems} />
      <main className="flex-1">
        <div className="profile-content">
          {loading ? (
            <p>Loading user info...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : user ? (
            <Box borderWidth="1px" borderRadius="lg" p={6} boxShadow="md" maxW="md" mx="auto" mt="15%">
              <VStack spacing={4} align="start">
                <Heading size="md">My Profile</Heading>
                <Text><strong>Username:</strong> {user.username}</Text>
                <Text><strong>Email:</strong> {user.email}</Text>
              </VStack>
            </Box>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;