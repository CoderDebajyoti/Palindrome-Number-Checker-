#include<stdio.h>

int main() {
	int n, reversednumber = 0, reminder, originalInteger;
	
	printf("Enter an integer: ");
	scanf("%d", &n);
	originalInteger = n;
	
	while(n != 0) {
		reminder = n % 10;
		reversednumber = reversednumber * 10 + reminder;
		n /= 10;
	}
	
	if(originalInteger == reversednumber) {
		printf("%d is a Palindrome.\n", originalInteger);
	} else {
		printf("%d is not a Palindrome.\n", originalInteger);
	}
	
	return 0;
}

