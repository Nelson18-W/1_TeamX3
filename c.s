li a0, 10           	# Load immediate value 10 into register a0
li a1, 0            	# Load immediate value 0 into register a1

startLoop:
	add a2, zero, a1 	# Argument a2
	jal fib          	# Call fib(a2)

	li a7, 64        	# System call number for printing integer
	ecall            	# Print the result

	addi a1, a1, 1   	# Increment a1 by 1
	bne a1, a0, startLoop

j endLoop

endLoop:
	# End the program
	li a2, 0
	li a7, 93         	# System call number for program exit
	ecall

fib:
	addi sp, sp, -24  	# Allocate 16 bytes on the stack
	sd s0, 16(sp)
	sd ra, 8(sp)      	# Save the return address on the stack at offset 8
	sd a2, 0(sp)      	# Save the value of a2 on the stack at offset 0

	bnez a2, elif     	# Branch if a2 is not equal to zero
	li a2, 0          	# Load immediate value 0 into register a2
	addi sp, sp, 24   	# Deallocate 16 bytes from the stack
	jr ra             	# Jump to the return address (end of function)

elif:
	li t6, 1          	# Load immediate value 1 into register t6
	bne a2, t6, else  	# Branch if a2 is not equal to t6
	li a2, 1          	# Load immediate value 1 into register a2
	addi sp, sp, 24   	# Deallocate 16 bytes from the stack
	jr ra             	# Jump to the return address (end of function)

else:
	addi a2, a2, -1   	# Subtract 1 from the value of a2
	jal fib           	# Jump and link to the fib function (commented out)
	mv s0, a2         	# Move the value of a2 into register s0
	ld a2, 0(sp)      	# Load the saved value of a2 from the stack
	addi a2, a2, -2   	# Subtract 2 from the value of a2
	jal fib           	# Jump and link to the fib function (commented out)
	add a2, s0, a2    	# Add the value of s0 and a2, and store the result in a2
	ld s0, 16(sp)
	ld ra, 8(sp)      	# Load the saved return address from the stack
	addi sp, sp, 24   	# Deallocate 24 bytes from the stack
	jr ra             	# Jump to the return address (end of function)



