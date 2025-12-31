import { Card, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={3} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
