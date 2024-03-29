 # main function
main:
	li a0, 7 	# Load immediate value 7 into register a0
	jal ra, fib  # Jump and link to the fib function
	li a7, 1 	# Print value
	ecall
	li a7, 10	# Load immediate value 10 into register a7
	ecall    	# System call (end of program)

# fib function
fib:
	addi sp, sp, -24	# Allocate 16 bytes on the stack
	sd s0, 16(sp)
	sd ra, 8(sp)    	# Save the return address on the stack at offset 8
	sd a0, 0(sp)    	# Save the value of a0 on the stack at offset 0
	bnez a0, elif   	# Branch if a0 is not equal to zero
	li a0, 0        	# Load immediate value 0 into register a0
	addi sp, sp, 24 	# Deallocate 16 bytes from the stack
	jr ra           	# Jump to the return address (end of function)

elif:
	li t6, 1        	# Load immediate value 1 into register t6
	bne a0, t6, else	# Branch if a0 is not equal to t6
	li a0, 1        	# Load immediate value 1 into register a0
	addi sp, sp, 24 	# Deallocate 16 bytes from the stack
	jr ra           	# Jump to the return address (end of function)

else:
	addi a0, a0, -1 	# Subtract 1 from the value of a0
	jal fib         	# Jump and link to the fib function (commented out)
	mv s0, a0       	# Move the value of a0 into register s0
	ld a0, 0(sp)    	# Load the saved value of a0 from the stack
	addi a0, a0, -2 	# Subtract 2 from the value of a0
	jal fib         	# Jump and link to the fib function (commented out)
	add a0, s0, a0  	# Add the value of s0 and a0, and store the result in a0
	ld s0, 16(sp)
	ld ra, 8(sp)    	# Load the saved return address from the stack
	addi sp, sp, 24 	# Deallocate 16 bytes from the stack
	jr ra           	# Jump to the return address (end of function)

