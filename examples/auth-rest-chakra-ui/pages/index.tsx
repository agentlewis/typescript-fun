import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Link } from '@chakra-ui/core';

const Index = () => {
  return (
    <>
      <Box m={8}>
        <Box maxW="sm" borderWidth="1px" rounded="lg" p={4} my={4}>
          {/* login or sign up. */}
          <Text fontSize="lg">
            You can{' '}
            <NextLink href={{ pathname: '/login' }}>
              <Link color="teal.500">login</Link>
            </NextLink>{' '}
            or{' '}
            <NextLink href={{ pathname: '/signup' }}>
              <Link color="teal.500">sign up</Link>
            </NextLink>
            .
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Index;
