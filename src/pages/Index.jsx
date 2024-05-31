import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="#f3f2f1" color="#000000" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" p={2} mx={2}>
            World
          </Link>
          <Link as={RouterLink} to="/business" p={2} mx={2}>
            Business
          </Link>
          <Link as={RouterLink} to="/opinion" p={2} mx={2}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/tech" p={2} mx={2}>
            Tech
          </Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="#f3f2f1" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>
          Main Headline: Breaking News Story
        </Heading>
        <Text fontSize="lg">
          This is a brief description of the main headline news story. It captures the essence of the news and provides a quick overview.
        </Text>
      </Box>

      {/* Additional News Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={4}>
        <Box bg="#f3f2f1" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" mb={2}>
            Article 1
          </Heading>
          <Text>
            Brief description of the first additional news article. This should be a short summary to entice readers to click through.
          </Text>
        </Box>
        <Box bg="#f3f2f1" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" mb={2}>
            Article 2
          </Heading>
          <Text>
            Brief description of the second additional news article. This should be a short summary to entice readers to click through.
          </Text>
        </Box>
        <Box bg="#f3f2f1" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" mb={2}>
            Article 3
          </Heading>
          <Text>
            Brief description of the third additional news article. This should be a short summary to entice readers to click through.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="#f3f2f1" color="#000000" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex>
            <Link as={RouterLink} to="/contact" p={2} mx={2}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" p={2} mx={2}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" p={2} mx={2}>
              Terms of Service
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;