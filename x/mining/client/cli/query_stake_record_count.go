package cli

import (
	"strconv"

	"cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/stafihub/stafihub/x/mining/types"
)

var _ = strconv.Itoa(0)

func CmdStakeRecordCount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "stake-record-count [user-address] [stake-pool-index]",
		Short: "Query stake record count",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqUserAddress := args[0]
			stakePoolIndex, err := math.ParseUint(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryStakeRecordCountRequest{
				UserAddress:    reqUserAddress,
				StakePoolIndex: uint32(stakePoolIndex.Uint64()),
			}

			res, err := queryClient.StakeRecordCount(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
