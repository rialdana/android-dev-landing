import { Container, Title, Text, Button, Group, Stack, Card, SimpleGrid, rem } from '@mantine/core';
import { IconBrandAndroid, IconCode, IconDeviceMobile, IconBook } from '@tabler/icons-react';
import Link from 'next/link';

const features = [
  {
    icon: IconBrandAndroid,
    title: 'Android Development',
    description: 'Learn the fundamentals of Android app development using Kotlin and Android Studio.',
    link: '/courses/android-basics'
  },
  {
    icon: IconCode,
    title: 'Modern Architecture',
    description: 'Explore modern Android architecture patterns like MVVM, Clean Architecture, and Jetpack Compose.',
    link: '/courses/architecture'
  },
  {
    icon: IconDeviceMobile,
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user interfaces following Material Design guidelines.',
    link: '/courses/ui-design'
  },
  {
    icon: IconBook,
    title: 'Best Practices',
    description: 'Learn industry best practices for testing, debugging, and deploying Android applications.',
    link: '/courses/best-practices'
  },
];

export default function Home() {
  const items = features.map((feature) => (
    <Card 
      key={feature.title} 
      shadow="md" 
      radius="md" 
      padding="xl"
      component={Link}
      href={feature.link}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} />
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py={100}>
      <Stack align="center" gap={50}>
        <div style={{ textAlign: 'center', maxWidth: rem(600) }}>
          <Title order={1} size={rem(60)} fw={900} lh={1}>
            Android Development{' '}
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              Made Easy
            </Text>
          </Title>
          <Text c="dimmed" mt="md">
            Start your journey into Android development with our comprehensive resources,
            tutorials, and best practices. Build amazing apps that users will love.
          </Text>
          <Group justify="center" mt={30}>
            <Button
              component={Link}
              href="/get-started"
              size="lg"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              href="/learn-more"
              size="lg"
              variant="default"
            >
              Learn More
            </Button>
          </Group>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          {items}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
