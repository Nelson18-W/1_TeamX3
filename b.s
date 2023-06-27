 .data
charValues: .word 50, 52, 0 # Input string "24\0"
.text

main:
  # Load the address of charValues into a1
  la a1, charValues

  # Load constants into t1 and t2
  li t1, 10  # t1 = 10 (used for multiplication)
  li t2, 0   # t2 = 0 (used for initializing loop)

startLoop:
  # Load a byte from memory at the address in a1+offset (0 in this case)
  lbu t3, 0(a1)

  # Check if the loaded byte is zero (end of string)
  beqz t3, endLoop

  # Check if the loaded byte is less than '0' or greater than '9'
  li t5, 48	# t5 = 48 ('0')
  li t6, 57	# t6 = 57 ('9')
  blt t3, t5, error  # If t3 < '0', jump to error
  bgt t3, t6, error  # If t3 > '9', jump to error

  # Convert the character to its corresponding numeric value
  addi t3, t3, -48

  # Multiply the existing value in a0 by 10
  mul a0, a0, t1

  # Add the converted digit to a0
  add a0, a0, t3

  # Move to the next character in the string
  addi a1, a1, 4

  # Jump back to startLoop to process the next character
  j startLoop

error:
  # Handle the case of an invalid character
  li a0, -1  # Set a0 to -1 (error code)
  li a7, 10  # Set a7 to 10 (system call for exit)
  ecall 	# Exit the program

endLoop:
  # Program execution reaches here when the end of string is reached
  li a7, 10  # Set a7 to 10 (system call for exit)
  ecall 	# Exit the program
