import { Container, NavigateLink, Title, Text } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <Title>AutoGoRentals</Title>
      <Text>
        Discover the freedom of hassle-free travel with our Rental Car. Whether
        you're exploring new destinations or need a reliable ride for daily
        commuting, we've got you covered. Browse a wide selection of vehicles,
        from compact cars to spacious SUVs, and book with ease. Enjoy
        transparent pricing, convenient pickup and drop-off options, and 24/7
        customer support.
      </Text>

      <NavigateLink to="/catalog">Book Now</NavigateLink>
    </Container>
  );
}
